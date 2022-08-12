
import swal from 'sweetalert';
import  { useState,useContext } from 'react'
import { Form, Input,Button} from 'antd';
import { Context } from "../Context";
import { CREATE_JOB_MUTATION } from '../GraphQL/Mutations';
import { useMutation } from '@apollo/client';

// export const jobs_context=createContext();

const handleChange = (e, setter) => {
  setter(e.target.value);
}

// const jobs_array = [];

function Jobform() {
  //getting the context from the parent component and adding job object to the context array
  const { jobs_array, setJobs_array } = useContext(Context);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [applyUrl, setApplyUrl] = useState('');

    //get the mutation object from the apollo client and pass the mutation object to the mutation hook
    const [postJob, { error }] = useMutation(CREATE_JOB_MUTATION);

    const postNewJob = async () => {
      //run mutation as an async await function and pass the variables to the mutation object
        const response = await postJob({
            variables: {
                title: title,
                commitmentId: "cjtu8esth000z0824x00wtp1i",
                companyName: "Trimulabs",
                locationNames: location,
                userEmail: email,
                description : description,
                applyUrl : applyUrl ,
            }
        });
        //if job posted and response was successful
        if (response) {
          swal("Success!", "Your Job has been posted Successfully!", "success");

        }
        //if job was not posted and response was not successful
        if (error){
          swal("Error!", "Your Job has not been posted!", "error");
        }

    }
  
    //after form validation if success
    const onSubmit_Success = (values) => {
      values['company_name']="Trimulabs";
      jobs_array.push(values);
      postNewJob();
    
    };
  //after form validation if Failed
    const onSubmit_Failed = (errorInfo) => {
      swal("Error!", "Kindly fill all the Required Fields!", "error");
    };

  return (
    <div className="form_data">
    {/* Get from data to post a job*/}
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
        onFinish={onSubmit_Success}
        onFinishFailed={onSubmit_Failed}
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
          <Input type='url' placeholder='apply url' onChange={(e) => handleChange(e, setApplyUrl)} />
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