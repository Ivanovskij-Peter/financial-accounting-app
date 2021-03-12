import React, { Component } from 'react';
import { Formik, Form, Field } from "formik";
import './balance.scss'
import svg from '../../images/sprite.svg'

export default class Balance extends Component {

    render() {

        return (
        <div>
                <a href="">
                    
                     <span>
                    Перейти к отчетам
                    </span> 
                 </a>
                            <svg width="20px" height="20" className = "">
                                <use href={svg + "#chart"} />
                            </svg>
                   
              
                <span>Баланс:</span>
                <Formik>
                
                <Form className="">
                <Field
                    type="number"
                    name="email"
                    className=""
                />
                <button
                    type="submit"
                    className=""
                    >
                </button>
                </Form>
               
                </Formik>
            <span>дата</span>
        </div>
        )
       
    };
};