# Booking System

Ky është një projekt për menaxhimin e rezervimeve, i ndarë në module të ndryshme si: models, controllers, services, dhe routes.

## Struktura e projektit

- **controllers/** – Logjika e kontrolluesve për secilën veçori (appointment, feedback, payment, user)
- **models/** – Modelet e të dhënave për secilën veçori
- **services/** – Shërbimet që përmbajnë logjikën e biznesit
- **routes/** – Rrugët për API-të
- **db/** – Lidhja me bazën e të dhënave
- **middleware/** – Middleware për autentikim dhe validim

## Si të përdorësh projektin

1. Shkarko projektin:
   ```bash
   git clone https://github.com/username/booking-system.git
   ```
2. Instalo varësitë:
   ```bash
   npm install
   ```
3. Starto aplikacionin:
   ```bash
   node app.js
   ```


## Branch-et kryesore

- **main** – Kodu stabil/prodhues
- **develop** – Zhvillimi aktiv
- **feature/feedback** – Veçori e re për feedback
- **feature/appointment** – Veçori e re për appointment
- **bugfix/payment** – Rregullim gabimi te pagesat
- **hotfix/security** – Ndryshime urgjente për siguri

## Kontributi

1. Krijo një issue për çdo problem ose veçori të re
2. Krijo një branch të ri për detyrën tënde
3. Bëj pull request kur të përfundosh

## Licenca

Ky projekt është për qëllime edukative.