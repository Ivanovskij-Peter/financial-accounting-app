import axios from "axios";
import transactionsActions from "./transaction-actions";

axios.defaults.baseURL = "http://localhost:8080/";

const setBalance = (balance) => async (dispatch)=>{
    
    dispatch(transactionsActions.setBalanceRequest())
    try {
        const responce = await axios.post("/user/balance", balance)
        dispatch(transactionsActions.setBalanceSucces())
    } catch (error) {
         dispatch(transactionsActions.setBalanceError(error.message));
    }
}

export default {
    setBalance,
}