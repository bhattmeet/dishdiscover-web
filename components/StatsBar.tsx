const stats = [
  { value: '1000+', label: 'Recipes' },
  { value: '30+', label: 'Cuisines' },
  { value: 'Free', label: 'To Download' },
  { value: '4.5★', label: 'Rating' },
]

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-gray-100 py-10 px-6 mt-14">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-2xl md:text-3xl font-bold text-brand-800">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
