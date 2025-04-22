const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 디렉토리 구조 확인 및 md 디렉토리 생성
const mdDir = path.join(process.cwd(), 'md');
if (!fs.existsSync(mdDir)) {
  fs.mkdirSync(mdDir);
  console.log('md 디렉토리가 생성되었습니다.');
}

// mmd 디렉토리에서 .mmd 파일 찾기
glob('mmd/*/*.mmd', {}, (err, files) => {
  if (err) {
    console.error('파일 검색 중 오류 발생:', err);
    return;
  }

  if (files.length === 0) {
    console.log('mmd 디렉토리에서 .mmd 파일을 찾을 수 없습니다.');
    return;
  }

  files.forEach(file => {
    try {
      // .mmd 파일 내용 읽기
      const mermaidContent = fs.readFileSync(file, 'utf8');

      // 파일 이름 추출
      const fileName = path.basename(file, '.mmd');

      // 상대 경로 구조 유지
      const relativeDir = path.dirname(file).replace('mmd/', '');
      const targetDir = path.join(mdDir, relativeDir);

      // 필요한 디렉토리 생성
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
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
  });
});
