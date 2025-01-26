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

System korzysta z **MySQL** do obsługi bazy danych oraz **Spring Boota** do zarządzania serwerem. Frontend został zrealizowany przy użyciu **HTML**, **CSS** oraz **JavaScript**.  

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

### Instrukcja uruchomienia aplikacji

Aby uruchomić aplikację, wykonaj następujące kroki:

1. **Sklonowanie repozytorium**
   Skopiuj repozytorium na swoje lokalne urządzenie, używając polecenia Git:
   ```
   git clone https://github.com/IO-SEM-5-SEKCJA-4/IO-SEM-5.git
   ```
2. **Zainstalowanie Spring Boota**
   Upewnij się, że masz zainstalowanego Spring Boota na swoim komputerze. Możesz pobrać go ze strony Spring Boot i zainstalować zgodnie z instrukcjami.
3. **Uruchomienie serwera Apache i MySQL**
Użyj programu XAMPP do uruchomienia lokalnego serwera Apache oraz serwera MySQL. Możesz pobrać XAMPP ze strony XAMPP. Po zainstalowaniu uruchom Apache i MySQL z interfejsu XAMPP.
4. **Uruchomienie aplikacji**
Po skonfigurowaniu środowiska, przejdź do katalogu z projektem i uruchom aplikację przy użyciu Spring Boota:
```
./mvnw spring-boot:run
```
Aplikacja powinna być dostępna pod adresem: http://localhost:8080.

---

English description
This repository contains a local web-based warehouse management system aimed at optimizing operations within a specific warehouse. The software enables efficient management of warehouse infrastructure and resource tracking.

Key features of the system:
User authentication: Registration and login, with roles (Administrator, Manager, Warehouse Worker, User) and their respective permissions.
Goods management: Storing detailed information about goods (name, quantity, serial number, description, expiration date).
Warehouse operations: Adding, removing, and blocking goods.
The system uses MySQL for database management, Spring Boot for server handling, and HTML, CSS, and JavaScript for the frontend.

### How to run the application

To run the application, follow these steps:

1. **Clone the repository**  
   Clone the repository to your local machine using the following Git command:
   ```
   git clone https://github.com/IO-SEM-5-SEKCJA-4/IO-SEM-5.git
   ```
2. **Install Spring Boot**
Ensure that you have Spring Boot installed on your machine. You can download it from Spring Boot and follow the installation instructions.
3. **Start Apache and MySQL servers**
Use XAMPP to start the local Apache server and MySQL server. You can download XAMPP from XAMPP. After installation, start Apache and MySQL from the XAMPP interface.
4. Run the application
After setting up your environment, navigate to the project directory and run the application using Spring Boot:
```
./mvnw spring-boot:run
```
The application should be accessible at: http://localhost:8080.
