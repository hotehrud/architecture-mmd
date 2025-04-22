const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// 디렉토리 구조 확인 및 md 디렉토리 생성
const mdDir = path.join(process.cwd(), 'md');
if (!fs.existsSync(mdDir)) {
  fs.mkdirSync(mdDir);
  console.log('md 디렉토리가 생성되었습니다.');
}

async function convertFiles() {
  try {
    // 1. mmd 디렉토리 내의 하위 디렉토리에 있는 .mmd 파일들
    const nestedFiles = await glob('mmd/*/*.mmd');

    // 2. mmd 디렉토리에 직접 있는 .mmd 파일들
    const rootFiles = await glob('mmd/*.mmd');

    const allFiles = [...nestedFiles, ...rootFiles];

    if (allFiles.length === 0) {
      console.log('mmd 디렉토리에서 .mmd 파일을 찾을 수 없습니다.');
      return;
    }

    for (const file of allFiles) {
      try {
        // .mmd 파일 내용 읽기
        const mermaidContent = fs.readFileSync(file, 'utf8');

        // 파일 이름 추출
        const fileName = path.basename(file, '.mmd');

        let targetDir;

        // mmd 디렉토리에 직접 있는 파일인 경우
        if (file.match(/^mmd\/[^\/]+\.mmd$/)) {
          // 파일명으로 디렉토리 생성
          targetDir = path.join(mdDir, fileName);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
        } else {
          // 하위 디렉토리에 있는 파일인 경우 기존 구조 유지
          const relativeDir = path.dirname(file).replace('mmd/', '');
          targetDir = path.join(mdDir, relativeDir);
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }
        }

        // md 파일 경로 생성
        const mdFilePath = path.join(targetDir, `${fileName}.md`);

        // Mermaid 내용을 마크다운 형식으로 변환
        const markdownContent = `# ${fileName} 다이어그램

\`\`\`mermaid
${mermaidContent}
\`\`\`
`;

        // .md 파일 생성
        fs.writeFileSync(mdFilePath, markdownContent);
        console.log(`${mdFilePath} 파일이 생성되었습니다.`);
      } catch (error) {
        console.error(`${file} 처리 중 오류 발생:`, error);
      }
    }
  } catch (err) {
    console.error('파일 검색 중 오류 발생:', err);
  }
}

convertFiles();
