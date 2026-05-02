const features = [
  {
    title: 'Discover Recipes',
    desc: 'Browse thousands of recipes across 30+ cuisines — from quick weeknight meals to festive specials.',
    iconBg: 'bg-brand-100',
    icon: (
      <svg className="text-brand-800" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Share Your Creations',
    desc: 'Upload your own recipes with photos, ingredients, and step-by-step instructions for the community.',
    iconBg: 'bg-blue-50',
    icon: (
      <svg className="text-blue-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Follow Food Lovers',
    desc: 'Build your culinary network — follow chefs and home cooks, like their recipes, and get inspired.',
    iconBg: 'bg-purple-50',
    icon: (
      <svg className="text-purple-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Meal Planning',
    desc: 'Plan your weekly meals in advance. Auto-generate shopping lists so you never miss an ingredient.',
    iconBg: 'bg-orange-50',
    icon: (
      <svg className="text-orange-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Achievements & Badges',
    desc: 'Earn badges as you cook, review, and share. Level up your profile and showcase your culinary progress.',
    iconBg: 'bg-yellow-50',
    icon: (
      <svg className="text-yellow-600" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Smart Notifications',
    desc: 'Get notified about new recipes, likes, and follows. Daily recipe picks sent straight to your phone.',
    iconBg: 'bg-brand-100',
    icon: (
      <svg className="text-brand-800" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-6 bg-gray-50" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-800 bg-brand-100 px-3 py-1 rounded-full">
            Features
          </span>
          <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mt-4 mb-3 tracking-tight">
            Everything a food lover needs
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From discovering new recipes to tracking your cooking journey — DishDiscover has it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className={`${f.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
