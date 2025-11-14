import Image from "next/image"

interface ResponsiveImageProps {
  src: string
  alt: string
  title?: string
  className?: string
  priority?: boolean
}

export function ResponsiveImage({ src, alt, title, className, priority = false }: ResponsiveImageProps) {
  return (
    <div className={className}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        title={title || alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        quality={85}
        style={{ objectFit: "cover" }}
      />
    </div>
  )
}
