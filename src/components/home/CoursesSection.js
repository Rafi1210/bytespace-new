import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    image: "/assets/home/courses/course-01.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
  },
  {
    title: "Build Digital Asset",
    author: "purepearl studio",
    image: "/assets/home/courses/course-02.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
  },
  {
    title: "the Power of Big Data",
    author: "purepearl studio",
    image: "/assets/home/courses/course-03.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
  },
  {
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    image: "/assets/home/courses/course-04.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
  },
  {
    title: "Mastering Money Management",
    author: "purepearl studio",
    image: "/assets/home/courses/course-05.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
  },
  {
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    image: "/assets/home/courses/course-06.png",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    rating: "4.5",
    price: "$25",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-white pb-16 lg:pb-[72px]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          gap-6
          px-5

          md:grid-cols-2
          md:gap-8

          lg:grid-cols-3
          lg:gap-[40px]
          lg:px-0
        "
      >
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}