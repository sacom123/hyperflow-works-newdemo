#!/usr/bin/env node

/**
 * 이미지를 AVIF 포맷으로 변환하는 스크립트
 * 
 * 사용법:
 *   node scripts/convert-images.js [input-dir] [output-dir]
 * 
 * 예시:
 *   node scripts/convert-images.js ./figma-images ./frontend/src/assets/images
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputDir = process.argv[2] || './figma-images';
const outputDir = process.argv[3] || './frontend/src/assets/images';

// sharp를 사용한 AVIF 변환 (sharp가 설치되어 있어야 함)
function convertToAVIF(inputPath, outputPath) {
  try {
    // sharp를 사용한 변환
    const sharp = require('sharp');
    
    sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
      })
      .catch((err) => {
        console.error(`✗ Failed to convert ${inputPath}:`, err.message);
      });
  } catch (error) {
    // sharp가 없으면 ImageMagick 사용 시도
    try {
      execSync(`magick convert "${inputPath}" "${outputPath}"`, { stdio: 'inherit' });
      console.log(`✓ Converted: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
    } catch (magickError) {
      console.error(`✗ Failed to convert ${inputPath}. Please install sharp or ImageMagick.`);
    }
  }
}

// 디렉토리 생성
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 이미지 파일 찾기
function findImages(dir) {
  const images = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      images.push(...findImages(filePath));
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(file)) {
      images.push(filePath);
    }
  }
  
  return images;
}

// 메인 실행
function main() {
  console.log('🖼️  Image Converter to AVIF');
  console.log(`Input: ${inputDir}`);
  console.log(`Output: ${outputDir}\n`);
  
  if (!fs.existsSync(inputDir)) {
    console.error(`✗ Input directory not found: ${inputDir}`);
    process.exit(1);
  }
  
  ensureDir(outputDir);
  
  const images = findImages(inputDir);
  console.log(`Found ${images.length} images to convert\n`);
  
  for (const imagePath of images) {
    const fileName = path.basename(imagePath, path.extname(imagePath));
    const outputPath = path.join(outputDir, `${fileName}.avif`);
    convertToAVIF(imagePath, outputPath);
  }
  
  console.log(`\n✓ Conversion complete! Images saved to ${outputDir}`);
}

main();

