
import swal from 'sweetalert';
import  { useState,useContext } from 'react'
import { Form, Input, Select ,Button} from 'antd';
import { Context } from "../Context";

// export const jobs_context=createContext();

const handleChange = (e, setter) => {
  setter(e.target.value);
}

// const jobs_array = [];

function Jobform() {
  const { jobs_array, setJobs_array } = useContext(Context);
    const [title, setTitle] = useState('');
    const [company_name, setCompany_name] = useState('Trimulabs');
    const [commitmentId, setCommitmentId] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [applyUrl, setApplyUrl] = useState('');
  
  
    const onFinish = (values) => {
      values['company_name']=company_name;
      console.log('Success:', values);
      swal("Success!", "Your Job has been posted Successfully!", "success");
      // jobs_array.push(values);
      jobs_array.push(values);
      // setItems((prevcount) => prevcount.push(values));
      console.log("inside jobform");
      console.log(jobs_array);
    
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      swal("Error!", "Kindly fill all the required fields!", "error");
    };

  // const HandlerOne = () => {
  //   useNavigate("/joblist");
  //     // navigate("/joblist");
  // };
  return (
    <div className="form_data">
    <Form 
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 8,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    auto-cleanup="on"
                  >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        { 
                            required: true,
                            message: 'Please input the title of Job!',
                        },
                    ]}>
                    <Input placeholder='Position Title' onChange={(e) => handleChange(e, setTitle)} />
                </Form.Item>
                <Form.Item
                label="Commitment">
                    <Select defaultValue="commitment" value={commitmentId || 'commitment'} onSelect={((value) => setCommitmentId(value))}>
                        <Select.Option value="fullTime">Full Time</Select.Option>
                        <Select.Option value="partTime">Part Time</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="location"
                    label="Location"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Company Location',
                        },
                    ]}>
                    <Input placeholder='Location' onChange={(e) => handleChange(e, setLocation)} />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Email',
                        },
                    ]}>
                    <Input type='email' placeholder='Your Email' onChange={(e) => handleChange(e, setEmail)} />
                </Form.Item>
                <Form.Item
                    name="applyUrl"
                    label="Apply Url"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter apply Url',
                        },
                    ]}>
                    <Input placeholder='apply url' onChange={(e) => handleChange(e, setApplyUrl)} />
                </Form.Item>
                <Form.Item label="Job Description" name="description" onChange={(e) => handleChange(e, setDescription)}>
                    <Input.TextArea placeholder='Job Description' rows={3} />
                </Form.Item>
                <Form.Item
                     wrapperCol={{
                      offset: 8,
                      span: 16,
                      }}
                  >
                  
                    <Button type="primary" htmlType="submit">
                     Submit
                    </Button>
                    
                
            
                 </Form.Item>
            </Form>
    </div>
  )
}

export default Jobform