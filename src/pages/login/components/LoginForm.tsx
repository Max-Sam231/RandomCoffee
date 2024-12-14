import { Button,  Form, Input } from 'antd';
import type {FormProps } from 'antd';
import { supabase } from '../../../shared/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type FieldType = {
  email: string;
  password: string;
};

function LoginForm() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate('/');
      }
    };
    checkSession();
  }, []);

  const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    console.log(error);
    if (error) {
      alert('Неверный логин или пароль!');
    } else {
      navigate('/');
    }
  };

  return (
    <Form
      name="login"
      style={{
        minWidth: 500,
        background: 'white',
        padding: '20px',
        borderRadius: '16px'}}
      initialValues={{ remember: true }}
      onFinish={onFinish}>
      <Form.Item<FieldType>
        label="Электронная почта"
        name="email"
        rules={[{ required: true, message: 'Введите Email!' }]}>
        <Input placeholder='Exapmle@qwe.com'/>
      </Form.Item>
      <Form.Item<FieldType>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}>
        <Input.Password placeholder='•••••••••••••'/>
      </Form.Item>

      <Form.Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <Button className='loginBtn' style={{ width: '80%' }} type="primary" htmlType="submit">Войти</Button><br></br>
        </div>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;