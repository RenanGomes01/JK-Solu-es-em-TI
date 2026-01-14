import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper para corrigir caminhos de imagens no GitHub Pages
export function getImagePath(path: string): string {
  // No GitHub Pages, sempre usar o basePath
  const basePath = '/JK-Solu-es-em-TI'
  return `${basePath}${path}`
}


