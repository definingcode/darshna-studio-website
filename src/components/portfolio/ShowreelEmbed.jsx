// TODO: replace with real showreel video ID
const SHOWREEL_ID = 'dQw4w9WgXcQ'

export default function ShowreelEmbed() {
  return (
    <div>
      <div className="aspect-video bg-ink border border-soft relative overflow-hidden">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${SHOWREEL_ID}`}
          title="Darshna Studio Showreel"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="pt-3.5 flex justify-between items-center text-[11px] uppercase tracking-[0.12em] text-mid font-medium">
        <span>The Showreel</span>
        {/* TODO: update runtime when real showreel lands */}
        <span>02:14</span>
      </div>
    </div>
  )
}
