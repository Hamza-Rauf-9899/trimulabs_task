import { useContext } from 'react'
import { Context } from "../Context";
import { Card, List, Button, Row, Col } from 'antd';

function Joblist() {
    const { jobs_array, setJobs_array } = useContext(Context);
    console.log("inside joblist");
    console.log(jobs_array);
  return (
    <div>
    <h1>inside joblist</h1>
   <h1>{JSON.stringify(jobs_array)}</h1>
   <Row>
                <Col>
                    <Card title="Jobs "  >
                        
                    
                        
                        <List
                            size="large"
                            bordered
                            dataSource={jobs_array}
                            renderItem={item => <List.Item key={item.id}>
                               Title: {item.title} <br></br>
                               Company: {item.company_name}<br></br>
                               Commitment: {item.commitmentId}<br></br>
                              location: {item.location}<br></br>
                               company email: {item.email}<br></br>
                               job description: {item.description}<br></br>
                               Link to apply: <a href={item.applyUrl}>Apply here</a> <br></br>
                                <Button type="danger" style={{ float: 'right' }} onClick={() => { }}>
                                    Delete
                                </Button>
                                <Button type="primary" style={{ float: 'right', marginRight: 7 }} onClick={() => { }}>
                                    Edit
                                </Button>
                            </List.Item>}
                        />
                    </Card>
                </Col>
            </Row>

    </div>
  )
}

export default Joblist