function SkillIcon({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-primary rounded-lg border border-gray-700 hover:border-secondary transition-colors">
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-sm text-gray-300">{name}</span>
    </div>
  );
}

export default SkillIcon;