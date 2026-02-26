export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 sm:py-12 md:py-16">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="footer-col pr-0 sm:pr-8">
            <div className="text-lg sm:text-xl font-medium mb-3 sm:mb-4 text-white tracking-tight">
              IIT BHU Varanasi
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Providing modern engineering and science education since 1919.
            </p>
          </div>

          <div className="footer-col">
            <h5 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Admissions</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">B.Tech Programs</li>
              <li className="hover:text-white transition-colors cursor-pointer">M.Tech & M.Pharma</li>
              <li className="hover:text-white transition-colors cursor-pointer">Ph.D. Programs</li>
              <li className="hover:text-white transition-colors cursor-pointer">JEE Advanced</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Academics</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Departments</li>
              <li className="hover:text-white transition-colors cursor-pointer">Library</li>
              <li className="hover:text-white transition-colors cursor-pointer">Academic Calendar</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Placements</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Placement Cell</li>
              <li className="hover:text-white transition-colors cursor-pointer">Statistics</li>
              <li className="hover:text-white transition-colors cursor-pointer">Recruiters</li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Campus</h5>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Hostels</li>
              <li className="hover:text-white transition-colors cursor-pointer">Gymkhana</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medical Facilities</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-t border-gray-800 pt-6 sm:pt-8">
          <div className="text-xs sm:text-sm text-gray-500 text-center">
            © 2026 Indian Institute of Technology (BHU) Varanasi
          </div>
        </div>
      </div>
    </footer>
  )
}