import Card from './components/Card'

const App = () => {
  
const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    postName: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    postName: "Software Development Engineer (SDE)",
    datePosted: "1 week ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta (Facebook)",
    postName: "React Developer",
    datePosted: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    postName: "UI Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    postName: "Senior Frontend Engineer",
    datePosted: "10 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Remote (India)"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    postName: "Software Engineer",
    datePosted: "4 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    postName: "Full Stack Developer",
    datePosted: "3 weeks ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
    companyName: "IBM",
    postName: "Junior Web Developer",
    datePosted: "6 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
    companyName: "Oracle",
    postName: "Backend Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Chennai, India"
  },
  {
   brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      postName: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
  }
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

        console.log(idx)
        
        return <div key={idx}>
          <Card  logo={elem.brandLogo} company={elem.companyName} post={elem.postName}  tag1={elem.tag1} tag2={elem.tag2} date={elem.datePosted} payment={elem.pay} location={elem.location}/>
        </div>
      })}
    </div>
  )
}

export default App
