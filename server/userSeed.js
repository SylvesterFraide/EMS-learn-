import User from "./modoles/user";
import bcrypt from "bcrypt";

const userRegister = async () => {
  try {
    const hashedPassword = await bcrypt.hash("admin", 10);
    const newUser = new User({
      name: "Admini",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    });
    await newUser.save();
    console.log("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
  }
};

userRegister();
