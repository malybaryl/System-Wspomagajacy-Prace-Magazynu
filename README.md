# Inżynieria Oprogramowania - Projekt - Sem.5 - Sekcja 4
## **To repozytorium to tylko kopia, pełne repozytorium znajduje się tutaj: [Repozytorium](https://github.com/IO-SEM-5-SEKCJA-4/IO-SEM-5)**
## **This repository is just a copy, the full repository can be found here: [Repository](https://github.com/IO-SEM-5-SEKCJA-4/IO-SEM-5).**
## Temat Projektu

System wspomagający obsługę magazynu.  

Warehouse Management System.

## Autorzy/Autors

- Kacper Baryłowicz ([malybaryl](https://github.com/malybaryl))
- Aleksanra Krzyżak ([aleksandra-krzyzak](https://github.com/aleksandra-krzyzak))
- Jonasz Kachel ([JonKe11](https://github.com/JonKe11))
- Piotr Samborski ([Eyelet02](https://github.com/Eyelet02))
- Jakub Dziewior ([jakubdziewior](https://github.com/jakubdziewior))
- Szymon Stach ([SzymonStach19](https://github.com/SzymonStach19))

---

**The English description is located at the bottom of the page.**

## Specyfikacja oprogramowania  

### Opis ogólny  
System zarządzania magazynem to lokalny system webowy, którego celem jest usprawnienie operacji magazynowych w wybranej hali magazynowej. Oprogramowanie umożliwia zarządzanie infrastrukturą magazynu oraz kontrolowanie stanu zasobów.  

#### Kluczowe cechy systemu:  
- **Autoryzacja użytkowników**: Rejestracja i logowanie z przypisywaniem ról (Administrator, Kierownik, Magazynier, Użytkownik) i związanych z nimi uprawnień.  
- **Zarządzanie towarami**: Przechowywanie szczegółowych informacji o towarach (nazwa, ilość, numer seryjny, opis, data ważności).  
- **Obsługa operacji magazynowych**: Dodawanie, usuwanie oraz blokowanie towarów.  

System korzysta z **MySQL** do obsługi bazy danych oraz frameworka **Bootstrap** do tworzenia responsywnego i estetycznego interfejsu użytkownika. Frontend został zrealizowany przy użyciu **HTML**, **CSS** oraz **JavaScript**.  

---

### Funkcjonalność systemu  

#### 1. **Dodawanie nowego towaru**  
Rejestracja towaru odbywa się poprzez wypełnienie formularza z danymi, które są następnie zapisywane w bazie danych.  

#### 2. **Usuwanie istniejącego towaru**  
Uprawnieni użytkownicy (Magazynier, Kierownik, Administrator) mogą usuwać towary z bazy danych za pomocą dedykowanej funkcji aplikacji.  

#### 3. **Rejestracja i logowanie**  
System umożliwia użytkownikom tworzenie kont i logowanie, co pozwala na dostęp do funkcji zgodnych z ich przydzieloną rolą.  

#### 4. **Role użytkowników**  
- **Administrator**: Pełen dostęp do systemu, zarządzanie towarami i użytkownikami.  
- **Kierownik**: Zarządzanie towarami oraz przypisywanie roli "Magazynier".  
- **Magazynier**: Zarządzanie towarami (dodawanie, edycja, usuwanie, blokowanie).  
- **Użytkownik**: Podstawowy dostęp do przeglądania towarów.  

#### 5. **Zarządzanie stanami magazynowymi**  
Towary mogą być oznaczane jako „Zablokowane”, co uniemożliwia dalsze operacje.  

---

### English description  
This repository contains a local web-based warehouse management system aimed at optimizing operations within a specific warehouse. The software enables efficient management of warehouse infrastructure and resource tracking.  

#### Key features of the system:
- **User authentication**: Registration and login, with roles (Administrator, Manager, Warehouse Worker, User) and their respective permissions.  
- **Goods management**: Storing detailed information about goods (name, quantity, serial number, description, expiration date).  
- **Warehouse operations**: Adding, removing, and blocking goods.  

The system uses **MySQL** for database management, **Bootstrap** for creating a responsive user interface, and **HTML**, **CSS**, and **JavaScript** for the frontend.
