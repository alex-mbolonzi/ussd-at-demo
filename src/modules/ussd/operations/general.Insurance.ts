const third_party_motor = [
    {
        id: "1",
        policy_number: "******345",
        premium_amount: "₦5,000",
        vehicle_make: "Mercedes",
        vehicle_model: "C220",
        vehicle_registration_number: "AEG3999",
        vehicle_value: "₦7,000,000",
        policy_status: "Active",
        expiry_date: "24/10/2021",
    },
    {
        id: "2",
        policy_number: "******876",
        premium_amount: "₦6,000",
        vehicle_make: "Toyota",
        vehicle_model: "axio",
        vehicle_registration_number: "DEG3789",
        vehicle_value: "₦3,000,000",
        policy_status: "Active",
        expiry_date: "08/03/2022",
    }
]
export async function fetchThirdPartyMotor(phone, name){
    // TODO FETCH DATA
    // TODO CACHE DATA
    
    return Promise.resolve(third_party_motor)
}

export async function fetchThirdPartyMotorByID(id){
    // TODO FETCH FROM CACHED
   const product = third_party_motor.find((el) => el.id === id)
   
   return Promise.resolve([product])
}