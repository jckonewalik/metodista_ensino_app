export const setAppointment = (appointments, appointmentToSet) => {
  const appointmentExists = appointments.find(
    (appointment) => appointment.student.id === appointmentToSet.student.id,
  );

  if (appointmentExists) {
    return appointments.map(
      (appointment) => {
        if (appointment.student.id === appointmentToSet.student.id) {
          return {
            ...appointmentToSet,
          };
        }
        return appointment;
      },
    );
  }

  return appointments;
};
