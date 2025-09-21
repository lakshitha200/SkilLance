
const Footer = () => {
  return (
    
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4"><i className="fa-solid fa-bullseye mr-2 text-primary"></i>Skil-Lance</h3>
                    <p className="text-gray-400">Find the solutions for your project with top freelancers talent worldwide.</p>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-4">For Clients</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Find Freelancers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Post a Project</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">How to Hire</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-4">For Freelancers</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Find Work</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Create Account</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">How to Get Hired</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">FAQ</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-primary transition">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>© 2025 Skil-Lance. Find the solutions for your project</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer