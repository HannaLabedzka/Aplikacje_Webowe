class Course:
    def __init__(self, id_student, course_name):
        self.id_student = id_student
        self.course_name = course_name
        
    
class Student:
    def __init__(self, id, name, surname, age):
        self.id = id
        self.name = name
        self.surname = surname
        self.age = age
        self.list_courses = []
        
    
with open("students.txt", "r", encoding="utf-8") as plik:
    lista = [x.strip() for x in plik]

students = {} #slownik

for line in lista:
    parts = line.split(",")
    id = int(parts[0])
    name = parts[1]
    surname = parts[2]
    age = int(parts[3])
    students[id] = Student(id, name, surname, age)
    
    
with open("courses.txt", "r", encoding="utf-8") as plik:
    lista = [x.strip() for x in plik]

courses = []

for line in lista:
    parts = line.split(",")
    id_student = int(parts[0])
    course_name = parts[1]
    course = Course(id_student, course_name)
    courses.append(course)
    if id_student in students:
        students[id_student].list_courses.append(course)


for student in students.values():
    
    print(student.name, " ", student.surname, f"  ({student.age} lat)")
    name = student.name
    surname = student.surname
    with open(f"{name}_{surname}", "w", encoding="utf-8") as imienny:
        imienny.write("Kursy: " + "\n")
        for x in student.list_courses:
            print(x.course_name)
            imienny.write("- " + x.course_name + "\n")

    
    
    

        

    
        
