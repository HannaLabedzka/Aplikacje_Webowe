
slowo=""

with open("wyniki4.txt", "w", encoding="utf-8") as file:

    #zad 1
    with open("przyklad.txt") as plik:
        lista = [x.strip() for x in plik]
        for i in range(39, len(lista), 40):
            slowo += lista[i][9]
    print(slowo)
    file.write(slowo + "\n")

    #zad 2
    max_litery = 0
    max_litery_slowo = ''
    with open("przyklad.txt") as plik:
        lista = [x.strip() for x in plik]
        for i in range(len(lista)):
            litery = len(lista[i]) - 1
            if litery >= max_litery:
                max_litery = litery
                max_litery_slowo = lista[i]
    print(max_litery_slowo, " - ", max_litery)
    file.write(max_litery_slowo)
    max_litery_str = str(max_litery)
    file.write(max_litery_str + "\n")

    #zad 3 
    with open("przyklad.txt") as plik:
        lista = [x.strip() for x in plik]
        for i in range(len(lista)):
            #ord('a') zwraca 65
            max_odleglosc = 0
            for j in range(len(lista[i])-1):
                odleglosc = abs(ord(lista[i][j]) - ord(lista[i][j+1]))
                if odleglosc > max_odleglosc:
                    max_odleglosc = odleglosc
            if max_odleglosc <= 10:
                print(lista[i])
                file.write(lista[i] + "\n")


#
#
 #   file.write("To jest przykładowy tekst.\n")
  #  file.write("Kolejna linia.")  


        











#Desktop\05_Informatyka\0000000\03_marzec\sygnaly
