import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {
  const users =[
    { img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'Orange',
      tag:'Satisfied',
      id:1
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'Royalblue',
      tag:'Underserved',
      id:2
    },
    {
      img:'https://images.unsplash.com/photo-1745434159123-5b99b94206ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8',
      intro:'',
      tag:'Underbanked',
      color:'black',
      id:3
    },
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color:'lightpink',
      tag:'Dashing',
      id:4
    },
    {
      img:'https://images.unsplash.com/photo-1539343915366-4da26f7a1f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHx3b3JraW5nfGVufDB8fDB8fHww',
      intro:'',
      color:'lightseagreen',
      tag:'Average',
      id:5
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      
    </div>
  )
}

export default App
