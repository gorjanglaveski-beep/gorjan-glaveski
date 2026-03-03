import fs from 'fs'
import path from 'path'

export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  tags: string[]
  thumbnail: string
  images: string[]
}

const PORTFOLIO_DIR = path.join(process.cwd(), 'public', 'portfolio')

function getThumbnail(dir: string, id: string): string {
  const files = fs.readdirSync(dir)
  const thumb = files.find((f) => /^thumbnail\.(jpg|jpeg|png|webp|gif|avif)$/i.test(f))
  return thumb ? `/portfolio/${id}/${thumb}` : ''
}

function getGalleryImages(dir: string, id: string): string[] {
  return fs
    .readdirSync(dir)
    .filter((f) => /^\d+\.(jpg|jpeg|png|webp|gif|avif)$/i.test(f))
    .sort((a, b) => parseInt(a) - parseInt(b))
    .map((f) => `/portfolio/${id}/${f}`)
}

function readProject(id: string): Project {
  const dir = path.join(PORTFOLIO_DIR, id)
  const meta = JSON.parse(fs.readFileSync(path.join(dir, 'text.txt'), 'utf-8'))
  const images = getGalleryImages(dir, id)
  const thumbnail = getThumbnail(dir, id) || images[0] || ''
  return {
    id,
    title: meta.title,
    category: meta.category,
    year: meta.year,
    description: meta.description,
    tags: meta.tags,
    thumbnail,
    images,
  }
}

export function getAllProjects(): Project[] {
  function parseOrder(name: string): number {
    const m = name.match(/(\d+)\s*$/)
    return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER
  }

  return fs
    .readdirSync(PORTFOLIO_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => ({ name: e.name, order: parseOrder(e.name) }))
    .sort((a, b) => a.order - b.order)
    .flatMap((e) => {
      try {
        return [readProject(e.name)]
      } catch {
        return []
      }
    })
}

export function getProject(id: string): Project | null {
  const dir = path.join(PORTFOLIO_DIR, id)
  if (!fs.existsSync(dir)) return null
  try {
    return readProject(id)
  } catch {
    return null
  }
}

export function getProjectIds(): string[] {
  function parseOrder(name: string): number {
    const m = name.match(/(\d+)\s*$/)
    return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER
  }

  return fs
    .readdirSync(PORTFOLIO_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => ({ name: e.name, order: parseOrder(e.name) }))
    .sort((a, b) => a.order - b.order)
    .map((e) => e.name)
}
