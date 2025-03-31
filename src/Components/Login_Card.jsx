import React from "react";
import { Card, Form, Input, Checkbox, Button } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginCard = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    return (
        <div className="login-container">
            <Container className="d-flex justify-content-center">
                <Card className="login-card">
                    <h2 className="text-center">Login</h2>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item 
                            label="Username" 
                            name="username" 
                            rules={[{ required: true, message: "Please enter your username!" }]}
                        >
                            <Input placeholder="Enter your username" />
                        </Form.Item>

                        <Form.Item 
                            label="Password" 
                            name="password" 
                            rules={[{ required: true, message: "Please enter your password!" }]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Link to='/dashboard'>
                            <Button type="primary" htmlType="submit" block>
                                Login
                            </Button>
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type="default" block style={{ background: "#DB4437", color: "white" }}>
                                Sign in with Google
                            </Button>
                        </Form.Item>

                        <p className="text-center">
                            Don't have an account? <Link to='/signup' style={{color:'black'}}>Sign up</Link> now
                        </p>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default LoginCard;