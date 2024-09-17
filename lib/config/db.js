import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://phucnguyen:projecttodoapp@cluster0.4p7dh.mongodb.net/todo-app');
    console.log("DB Connected");
}