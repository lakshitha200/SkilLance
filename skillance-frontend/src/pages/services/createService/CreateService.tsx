import { useState, type FormEvent } from 'react';
import './CreateService.css';
import { category } from '../../../data/category';
import { addGigPackage, createGig, deleteGig, getALlGigs, getGigById } from '../../../services/gigService';
import toast from 'react-hot-toast';
const CreateService = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        price1: "",
        price2: "",
        price3: "",
        des1: "",
        des2: "",
        des3: ""
    });

    // one handler for all inputs
    const onChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value.trim()
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const gigData = { title: formData.title, description: formData.description, category: formData.category, user_id: 1000 };
        const gigPackageData = {
            basicPackage: { name: "Basic", description: formData.des1, price: formData.price1, deliveryDays: 2 },
            standradPackage: { name: "Standard", description: formData.des2, price: formData.price2, deliveryDays: 2 },
            premiumPackage: { name: "Premium", description: formData.des3, price: formData.price3, deliveryDays: 2 },
        }

        const gig = await createGig(gigData);
        if (gig != null) {
            await addGigPackage(gig.data.id, gigPackageData.basicPackage);
            await addGigPackage(gig.data.id, gigPackageData.standradPackage);
            await addGigPackage(gig.data.id, gigPackageData.premiumPackage);
            toast.success("New Gig Added Sucessfully!")
        } else {
            toast.error("Gig Creation Faild!")
        }
    }

    return (
        <>
            {/* Progress Steps */}
            <div className='lg:w-3/4'>
                <div className="bg-white shadow-sm py-6 mb-8">
                    <div className=" px-4">
                        <div className="flex justify-center">
                            <div className="flex items-center space-x-12">

                                <div className="flex flex-col items-center">
                                    <div className={`step-indicator ${step === 1 ? "active" : `${step > 1 ? "completed" : ""}`}`} id="step1Indicator">
                                        {step > 1 ? <i className="fa-solid fa-check"></i> : 1}
                                    </div>
                                    <div className={`step-label ${step === 1 ? "active" : `${step > 1 ? "completed" : ""}`}`} >Gig Details</div>
                                </div>
                                <div className="h-1 w-16 bg-gray-200"></div>
                                <div className="flex flex-col items-center">
                                    <div className={`step-indicator ${step === 2 ? "active" : `${step > 2 ? "completed" : ""}`}`} id="step2Indicator">
                                        {step > 2 ? <i className="fa-solid fa-check"></i> : 2}
                                    </div>
                                    <div className={`step-label ${step === 2 ? "active" : `${step > 2 ? "completed" : ""}`}`}>Pricing</div>
                                </div>
                                <div className="h-1 w-16 bg-gray-200"></div>
                                <div className="flex flex-col items-center">
                                    <div className={`step-indicator ${step === 3 ? "active" : `${step > 3 ? "completed" : ""}`}`}>
                                        {step > 3 ? <i className="fa-solid fa-check"></i> : 3}
                                    </div>
                                    <div className={`step-label ${step === 3 ? "active" : `${step > 3 ? "completed" : ""}`}`}>Gallery</div>
                                </div>
                                <div className="h-1 w-16 bg-gray-200"></div>
                                <div className="flex flex-col items-center">
                                    <div className={`step-indicator ${step === 4 ? "active" : ""}`}>4</div>
                                    <div className={`step-label ${step === 4 ? "active" : ""}`}>Publish</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className=" px-4 pb-16">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Create a New Gig</h1>
                        <p className="text-gray-600 mb-8">Create a new service offering to attract clients on DevFreelance</p>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            {/* Step 1: Gig Details */}
                            <div className={`form-step ${step === 1 ? "active" : ""}`}>
                                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                    <h2 className="text-xl font-bold mb-6">Gig Details</h2>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Gig Title</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary" placeholder="e.g., I will develop a REST API with Spring Boot"
                                            name='title' onChange={(e) => onChangeHandler(e)} />
                                        <p className="text-gray-500 text-sm mt-2">Describe your service in a few words</p>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Category</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                                            name='category' onChange={(e) => onChangeHandler(e)}>
                                            <option value="">Select a category</option>
                                            {category.map((cat: any) => (
                                                <option key={cat.title} value={cat.title}>{cat.title}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Search Tags</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary" placeholder="e.g., API, Spring Boot, Microservices" />
                                <p className="text-gray-500 text-sm mt-2">Add tags that describe your gig (separated by commas)</p>
                            </div> */}

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Gig Description</label>
                                        <div className="border border-gray-300 rounded-md">
                                            <div className="rich-text-toolbar">
                                                <button type="button" className="rich-text-btn"><i className="fa-solid fa-bold"></i></button>
                                                <button type="button" className="rich-text-btn"><i className="fa-solid fa-italic"></i></button>
                                                <button type="button" className="rich-text-btn"><i className="fa-solid fa-list-ul"></i></button>
                                                <button type="button" className="rich-text-btn"><i className="fa-solid fa-list-ol"></i></button>
                                            </div>
                                            <textarea className="w-full px-4 py-3 focus:outline-none min-h-[200px]" placeholder="Describe your service in detail..."
                                                name='description' onChange={(e) => onChangeHandler(e)}></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button type='button' className="bg-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition" onClick={() => setStep(step + 1)}>
                                        Next: Pricing <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Step 2: Pricing */}
                            <div className={`form-step ${step === 2 ? "active" : `${step > 2 ? "completed" : ""}`}`}>
                                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                    <h2 className="text-xl font-bold mb-6">Pricing Packages</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {/* Basic Package */}
                                        <div className="package-card p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-bold">Basic</h3>
                                                <div className="flex items-center">
                                                    <span className="text-gray-500 text-sm mr-1">$</span>
                                                    <input type="number" className="w-16 border-b border-gray-300 focus:outline-none focus:border-primary text-right" name='price1' onChange={(e) => onChangeHandler(e)} />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm" placeholder="Describe what's included in this package" rows={3}
                                                    name='des1' onChange={(e) => onChangeHandler(e)}></textarea>
                                            </div>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">3-day delivery</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">1 revision</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">Basic support</span>
                                                </div>
                                            </div>
                                            <button className="w-full bg-primary text-white py-2 rounded-md text-sm">
                                                Selected
                                            </button>
                                        </div>

                                        {/* Standard Package */}
                                        <div className="package-card p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-bold">Standard</h3>
                                                <div className="flex items-center">
                                                    <span className="text-gray-500 text-sm mr-1">$</span>
                                                    <input type="number" className="w-16 border-b border-gray-300 focus:outline-none focus:border-primary text-right" name='price2' onChange={(e) => onChangeHandler(e)} />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm" placeholder="Describe what's included in this package" rows={3}
                                                    name='des2' onChange={(e) => onChangeHandler(e)}></textarea>
                                            </div>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">5-day delivery</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">3 revisions</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">Priority support</span>
                                                </div>
                                            </div>
                                            <button className="w-full bg-primary text-white py-2 rounded-md text-sm">
                                                Selected
                                            </button>
                                        </div>

                                        {/* Premium Package */}
                                        <div className="package-card p-6">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-bold">Premium</h3>
                                                <div className="flex items-center">
                                                    <span className="text-gray-500 text-sm mr-1">$</span>
                                                    <input type="number" className="w-16 border-b border-gray-300 focus:outline-none focus:border-primary text-right" name='price3' onChange={(e) => onChangeHandler(e)} />
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm" placeholder="Describe what's included in this package" rows={3}
                                                    name='des3' onChange={(e) => onChangeHandler(e)}></textarea>
                                            </div>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">7-day delivery</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">Unlimited revisions</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="checkbox" className="mr-2" checked />
                                                    <span className="text-sm">24/7 support</span>
                                                </div>
                                            </div>
                                            <button className="w-full bg-primary text-white py-2 rounded-md text-sm">
                                                Selected
                                            </button>
                                        </div>
                                    </div>

                                    {/* <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Delivery Time</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary">
                                            <option value="1">1 day</option>
                                            <option value="2">2 days</option>
                                            <option value="3" selected>3 days</option>
                                            <option value="5">5 days</option>
                                            <option value="7">7 days</option>
                                            <option value="10">10 days</option>
                                            <option value="14">14 days</option>
                                        </select>
                                    </div> */}
                                </div>

                                <div className="flex justify-between">
                                    <button type='button' className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition" onClick={() => setStep(step - 1)}>
                                        <i className="fa-solid fa-arrow-left mr-2"></i> Back
                                    </button>
                                    <button type='button' className="bg-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition" onClick={() => setStep(step + 1)}>
                                        Next: Gallery <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Step 3: Gallery */}
                            <div className={`form-step ${step === 3 ? "active" : `${step > 3 ? "completed" : ""}`}`}>
                                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                    <h2 className="text-xl font-bold mb-6">Gig Gallery</h2>

                                    <div className="mb-8">
                                        <label className="block text-gray-700 mb-2">Gig Images</label>
                                        <p className="text-gray-500 text-sm mb-4">Upload images that showcase your work (Max 3 images)</p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="image-upload-box h-40 flex flex-col items-center justify-center cursor-pointer">
                                                <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-2"></i>
                                                <p className="text-gray-500">Click to upload</p>
                                                <input type="file" className="hidden" accept="image/*" />
                                            </div>
                                            <div className="image-upload-box h-40 flex items-center justify-center bg-gray-100 relative">
                                                <img src="https://via.placeholder.com/300x200?text=Sample+Work" alt="Sample work" className="h-full w-full object-cover rounded-md" />
                                                <button className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full">
                                                    <i className="fa-solid fa-xmark text-xs"></i>
                                                </button>
                                            </div>
                                            <div className="image-upload-box h-40 flex flex-col items-center justify-center cursor-pointer">
                                                <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 mb-2"></i>
                                                <p className="text-gray-500">Click to upload</p>
                                                <input type="file" className="hidden" accept="image/*" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">FAQ</label>
                                        <p className="text-gray-500 text-sm mb-4">Add frequently asked questions about your gig</p>

                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex-1">
                                                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary mb-2" placeholder="Question" />
                                                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" placeholder="Answer" rows={2}></textarea>
                                                </div>
                                                <button className="ml-4 text-red-500 mt-2">
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>

                                            <button className="flex items-center text-primary">
                                                <i className="fa-solid fa-plus mr-2"></i> Add FAQ
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <button type='button' className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition" onClick={() => setStep(step - 1)}>
                                        <i className="fa-solid fa-arrow-left mr-2"></i> Back
                                    </button>
                                    <button type='button' className="bg-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition" onClick={() => setStep(step + 1)}>
                                        Next: Publish <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </button>
                                </div>
                            </div>

                            {/* Step 4: Publish */}
                            <div className={`form-step ${step === 4 ? "active" : ""}`}>
                                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                                    <h2 className="text-xl font-bold mb-6">Review and Publish</h2>

                                    <div className="mb-8 p-6 border border-gray-200 rounded-lg">
                                        <h3 className="font-bold text-lg mb-4">Gig Preview</h3>

                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="md:w-1/3">
                                                <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                                                    <i className="fa-solid fa-image text-3xl text-gray-400"></i>
                                                </div>
                                            </div>
                                            <div className="md:w-2/3">
                                                <h4 className="font-bold text-xl mb-2">REST API Development with Spring Boot</h4>
                                                <div className="flex items-center mb-4">
                                                    <div className="flex text-yellow-400 mr-2">
                                                        <i className="fa-solid fa-star text-sm"></i>
                                                        <i className="fa-solid fa-star text-sm"></i>
                                                        <i className="fa-solid fa-star text-sm"></i>
                                                        <i className="fa-solid fa-star text-sm"></i>
                                                        <i className="fa-solid fa-star-half-stroke text-sm"></i>
                                                    </div>
                                                    <span className="text-gray-600 text-sm">(128 reviews)</span>
                                                </div>
                                                <p className="text-gray-600 mb-4">I will develop scalable REST APIs using Spring Boot and microservices architecture. Perfect for your web and mobile applications.</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                                            <i className="fa-solid fa-user text-gray-600"></i>
                                                        </div>
                                                        <span className="font-medium">JohnDev</span>
                                                    </div>
                                                    <div className="text-primary font-bold">From $45.00</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="mr-2" />
                                            <span>I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <button type='button' className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition" onClick={() => setStep(step - 1)}>
                                        <i className="fa-solid fa-arrow-left mr-2"></i> Back
                                    </button>
                                    <button type='submit' className="bg-primary text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                                        <i className="fa-solid fa-check mr-2"></i> Publish Gig
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateService