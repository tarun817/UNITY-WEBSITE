#!/usr/bin/env node

/**
 * Setup script to link static assets to public directory for Vite
 * This allows Vite to serve the assets while keeping the original structure
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, 'public')
const assetDirs = [
  'css',
  'img',
  'js',
  'vendor',
  'myflexslider',
  'mygallery',
  'downloads',
  'master',
  'news_html',
  'press',
  'results'
]

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
  console.log('Created public directory')
}

// Create symlinks or copy directories
assetDirs.forEach(dir => {
  const sourcePath = path.join(__dirname, dir)
  const targetPath = path.join(publicDir, dir)

  if (fs.existsSync(sourcePath)) {
    // Check if target already exists
    if (fs.existsSync(targetPath)) {
      console.log(`✓ ${dir} already exists in public/`)
      return
    }

    try {
      // Try to create symlink (works on Unix systems)
      fs.symlinkSync(sourcePath, targetPath, 'dir')
      console.log(`✓ Created symlink: public/${dir} -> ${dir}`)
    } catch (error) {
      // If symlink fails (e.g., on Windows without admin), copy the directory
      if (error.code === 'EEXIST') {
        console.log(`✓ ${dir} already exists in public/`)
      } else {
        console.warn(`⚠ Could not create symlink for ${dir}, you may need to copy it manually`)
        console.warn(`  Copy ${dir} to public/${dir}`)
      }
    }
  } else {
    console.log(`⚠ ${dir} not found, skipping`)
  }
})

console.log('\n✓ Asset setup complete!')
console.log('You can now run: npm run dev')
