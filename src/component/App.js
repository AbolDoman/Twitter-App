import React from 'react';
import Layout from "./layout/Layout";
import 'react-toastify/dist/ReactToastify.css'
import Home from "../pages/main/Home";
import TweetByHashTag from "../pages/tweetsByHashTag/tweetByHashTag";
import TweetByUser from "../pages/tweetsByUser/tweetByUser";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import LoginAndRegister from "../pages/loginAndRegister/LoginAndRegister";
import {toast, ToastContainer} from "react-toastify";
import {ContextProvider} from "../context/TweetContext";
import '../i18n'
import {useTranslation} from "react-i18next";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={'/login'} component={LoginAndRegister} />
                    <PrivateRoute path={'/'} render={()=>
                        <ContextProvider>
                            <Layout>
                                <Switch>
                                    <Route exact path={"/"} component={Home}/>
                                    <Route exact path={"/users/:user/:id"} component={TweetByUser}/>
                                    <Route exact path={"/hashTags/:hashTag"} component={TweetByHashTag}/>
                                    <Route component={NotFoundPage} />
                                </Switch>
                            </Layout>
                        </ContextProvider>
                    } />
                </Switch>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
};

const isLogin = () =>  !!localStorage.getItem("x-auth-token");

const PublicRoute = ({component,...props}) => {
    const {t} = useTranslation();
    return <Route {...props} render={(props)=>{
        if(isLogin()){
            toast.success(t("success.welcomeMessage"));
            return <Redirect to={'/'} />
        }else {
            return React.createElement(component,props);
        }
    }
    } />
};
const PrivateRoute = ({render,...props}) =>{
    return <Route {...props} render={(props)=>{
        if(!isLogin()){
            return <Redirect to={'/login'} />
        }else {
            return render(props);
        }
    }
    } />
};
export default App;
