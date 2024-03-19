import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';
const LineChart = () => {

    const studentMarks= [
          {
            "id": 1,
            "name": "Alice",
            "math_marks": 85,
            "physics_marks": 78,
            "chemistry_marks": 90
          },
          {
            "id": 2,
            "name": "Bob",
            "math_marks": 78,
            "physics_marks": 82,
            "chemistry_marks": 85
          },
          {
            "id": 3,
            "name": "Charlie",
            "math_marks": 92,
            "physics_marks": 88,
            "chemistry_marks": 92
          },
          {
            "id": 4,
            "name": "David",
            "math_marks": 88,
            "physics_marks": 90,
            "chemistry_marks": 89
          },
          {
            "id": 5,
            "name": "Emily",
            "math_marks": 75,
            "physics_marks": 72,
            "chemistry_marks": 78
          },
          {
            "id": 6,
            "name": "Frank",
            "math_marks": 80,
            "physics_marks": 85,
            "chemistry_marks": 80
          },
          {
            "id": 7,
            "name": "Grace",
            "math_marks": 90,
            "physics_marks": 92,
            "chemistry_marks": 88
          },
          {
            "id": 8,
            "name": "Hannah",
            "math_marks": 85,
            "physics_marks": 80,
            "chemistry_marks": 85
          },
          {
            "id": 9,
            "name": "Ian",
            "math_marks": 79,
            "physics_marks": 75,
            "chemistry_marks": 77
          },
          {
            "id": 10,
            "name": "Julia",
            "math_marks": 87,
            "physics_marks": 88,
            "chemistry_marks": 86
          }
        ];
      
      
      
    return (
        <div className='bg-gray-200 mx-auto'>
            <LChart width={800} height={400} data={studentMarks}>
                <XAxis  dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="math_marks" stroke="red" ></Line>
                <Line type="monotone" dataKey="physics_marks"  stroke="green"></Line>
                <Line type="monotone" dataKey="chemistry_marks" stroke="blue"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;