import {configureStore} from "@reduxjs/toolkit";
import userreducer from "../Features/userSlice";

export default configureStore ({
    reducer : {
        user:userreducer,
    },
});
