#read_graph -> funkcja przyjmuje nazwę pliku i zwraca listy sąsiedztwa oraz ilość wierzchołków
#write_neighbours_list -> funkcja przyjmuję listę sąsiedztwa i wypisuje ją na ekran w formacie "Sąsiadami wierzchołka X są: a, b, c"
#list_to_matrix -> funkcja przyjmuje listę sąsiedztwa i zwraca macierz sąsiedztwa
#write_matrix -> funkcja przyjmue macierz sąsiedztwa i wypisuje ją na ekran
#main -> funkcja podstawowa, wywoływana jeżeli uruchomiono plik

def read_graph(file_name):
    with open(file_name) as plik:
        lista = [x.strip() for x in plik]
        neigh_lists = []
        num_vertices = int(lista[0])
        
        for line in lista[1:]: #od indeksu 1 do konca -> bez pierwszej linii
            parts = line.split(" ")
            neigh = [int(x) for x in parts]
            neigh_lists.append(neigh)

        return num_vertices, neigh_lists
    

    
def write_neighbours_list(neigh_lists):
    for i, neigh in enumerate(neigh_lists):
        print(f"Sąsiadami wierzchołka {i} są: {', '.join(map(str, neigh))}")
        #i = 1 → neigh = [0, 2, 3]

def list_to_matrix(neigh_lists):
    n = len(neigh_lists) #ilosc wierzcholkow
    matrix = [[0] * n for _ in range(n)] #kwadratowa macierz

    for i, neighbours in enumerate(neigh_lists):
        for j in neighbours:
            matrix[i][j] = 1
    
    return matrix

def write_matrix(matrix):
    print()
    print("Macierz sasiedztwa")
    for row in matrix:
        print(" ".join(map(str, row)))
        #map -> zmienia na tekst 
        #join go laczy w 1 string

def main():
    num_vertices, neigh_lists = read_graph("graph.txt")
    write_neighbours_list(neigh_lists)
    matrix = list_to_matrix(neigh_lists)
    write_matrix(matrix)

main()




    