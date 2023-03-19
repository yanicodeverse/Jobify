const register = async (req, res) => {
    res.send("register");
};
const login = async (req, res) => {
    res.send("login");
};
const userUpdate = async (req, res) => {
    res.send("userUpdate");
};

export { register, login, userUpdate };
