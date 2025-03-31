import React from "react";
import { Card, Form, Input, Checkbox, Button } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupCard = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    return (
        <div className="signup-container">
            <Container>
                <Card className="signup-card">
                    <h2 className="text-center">Sign Up</h2>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item 
                            label="Username" 
                            name="username" 
                            rules={[{ required: true, message: "Please enter your username!" }]}
                        >
                            <Input placeholder="Enter your username" />
                        </Form.Item>

                        <Form.Item 
                            label="Email" 
                            name="email" 
                            rules={[
                                { required: true, message: "Please enter your email!" },
                                { type: "email", message: "Please enter a valid email!" }
                            ]}
                        >
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item 
                            label="Password" 
                            name="password" 
                            rules={[{ required: true, message: "Please enter your password!" }]}
                        >
                            <Input.Password placeholder="Enter your password" />
                        </Form.Item>

                        <Form.Item name="terms" valuePropName="checked">
                            <Checkbox>I agree to the terms and conditions</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Link to='/'>
                            <Button type="primary" htmlType="submit" block>
                                Sign Up
                            </Button>
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type="default" block style={{ background: "#DB4437", color: "white" }}>
                                Sign up with Google
                            </Button>
                        </Form.Item>

                        <p className="text-center">
                            Already have an account? <Link style={{color:'black'}} to='/'>Login</Link>
                        </p>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default SignupCard;