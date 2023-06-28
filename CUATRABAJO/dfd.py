diccionario = {"manzana": 20, "banana": 2, "naranja": 3}


fruta = "manzana"
try:
    cantidad = diccionario[fruta]
    print("La cantidad de ",fruta,"es:",cantidad)
except KeyError:
    print("La fruta ingresada no se encuentra en el diccionario.")