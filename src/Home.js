import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function Home(){
    const [studentList,setStudentList] = useState([])
    useEffect(()=>{      
        axios.get ('http://localhost:2020/list')
        .then((res)=>setStudentList(res.data.records))
        .catch(err=> console.log(err));
    },[studentList])
    
    const handledelete=(id)=>{
        axios.delete('http://localhost:2020/remove/'+id)
        .then(res=>{
            Location.reload();
        })
        .catch(err=> console.log(err));
      }
       

return(
    <div className="student" >
    <div align="center">Participant</div><br/>
       
 
<table className="bordered-table" align ="center">
    <thead>
        <tr>
           <th>FirstName</th>
           <th>LastName</th>
           <th>Id</th>
           <th>E-Mail</th>
           <th>PhoneNumber</th>
           <th>Year</th>
           <th>College</th>
           <th>update</th>
           <th>Action</th>

        </tr>
    </thead>
    <tbody>
        {  
        studentList.map((student)=>{
            return <tr key={student.id}>
                <td>{student.fristname}</td>
                <td>{student.lastname}</td>
                <td>{student.id}</td>
                <td>{student.email}</td>
                <td>{student.phonenumber}</td>
                <td>{student.curr_year}</td>
                <td>{student.college}</td>
                <td>
                    <Link to={`/edit/${student.id}`}>edit</Link>
                    
                </td>
                <td><button onClick={()=>handledelete(student.id)}>delete</button></td>

                
            </tr>
})
           
          
    }
    </tbody>
</table>

<nav align="center">
    <Link to="/">back</Link>
</nav>
    </div>
)

    
}

export default Home

