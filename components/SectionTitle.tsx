interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-secondary-900 dark:text-secondary-50 mb-12 sm:mb-16">
      {children}
    </h2>
  )
}

export default SectionTitle 