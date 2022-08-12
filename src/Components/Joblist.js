
import { useContext } from 'react'
import { Context } from "../Context";
import { Card, List, Button} from 'antd';

function Joblist() {
    const { jobs_array, setJobs_array } = useContext(Context);
    console.log("inside joblist");
    console.log(jobs_array);
  return (
    <div>                
                        <List
                            size="large"
                            bordered
                            dataSource={jobs_array}
                            renderItem={item => <List.Item key={item.id}
                            >
                            <Card  title={item.title} extra={<a href="#">More</a>} style={{marginTop: 10,height:'10%',marginRight:'20%',marginLeft:'20%',width:'150%'}}>
                            <label>Company : </label>  {item.company_name}<br></br>
                            <label>location :</label> {item.location}<br></br>
                            <label> company email : </label> {item.email}<br></br>
                            <label>job description :</label> {item.description}<br></br>
                            <label>Link to apply :</label> <a href={item.applyUrl} target="_blank" rel="noopener noreferrer">Click here</a> <br></br>
                                <Button type="danger" style={{ float: 'right' }} onClick={() => { }}>
                                    Delete
                                </Button>
                                <Button type="primary" style={{ float: 'right', marginRight: 7 }} onClick={() => { }}>
                                    Edit
                                </Button>
                            </Card>

                            </List.Item>}
                        />
    </div>
  )
}
export default Joblist