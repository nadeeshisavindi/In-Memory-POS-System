// ---------------------- REGEX ----------------------
const phone_regex = new RegExp("^[0]{1}[7]{1}[0-9]{8}$"); // 07XXXXXXXX

// ---------------------- CHECK FUNCTIONS ----------------------
const check_phone = (phone) => {
    return phone_regex.test(phone);
}

const check_name = (name) => {
    return name !== null && name.trim().length >= 3;
}

const check_address = (address) => {
    return address !== null && address.trim().length >= 5;
}

const check_id = (id) => {
    return id !== null && id.trim() !== "";
}

// ---------------------- EXPORT ----------------------
export {check_phone, check_name, check_address, check_id};