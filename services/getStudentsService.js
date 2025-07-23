import { getAllStudents } from "../db/students.js";
import serviceResponse from "../helpers/serviceResponse.js";
const getStudentsService = async (req, res) => {
  try {
    let query = req.query || {};
    const students = await getAllStudents(query);
    return serviceResponse(
      200,
      false,
      students,
      "Students Fetched Successfully"
    );
  } catch (error) {
    console.log("error => ", error);
  }
};

export default getStudentsService;
