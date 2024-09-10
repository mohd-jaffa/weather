<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="/mystyle.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <style>
        .scrollable-forecast {
            overflow-x: auto;
            display: flex;
            gap: 10px;
        }
        .forecast-card {
            min-width: 120px;
            background-color: #f8f9fa;
            padding: 10px;
            border-radius: 10px;
            text-align: center;
        }
        .forecast-card img {
            width: 50px;
        }
    </style>
</head>
<body class="d-flex flex-column min-vh-100">


    <nav>
        <div class="container-fluid" style="background: rgb(5, 5, 41);">
            <a class="navbar-brand text-white m-4 fw-bold" href="/index.html" style="font-size: 30px;">weather</a>
        </div>
    </nav>


    <div class="d-flex justify-content-center align-items-center vh-100 mt-5 mb-5">
        <div class="container m-5" style="background: #92736C; max-width: 400px; border-radius: 20px;">
            <div class="row mt-3">
                <div class="col">
                    <form class="d-flex">
                        <input class="form-control m-2" type="search" placeholder="search city" id="valueSearch">
                        <button class="btn btn-outline-light m-2" type="submit">
                            <i class='bx bx-search-alt' ></i>
                        </button>
                    </form>
                </div>
            </div>

            <div class="row  mt-3 text-center">
                <div class="col">
                    <figure class="figure" id="city">
                        <figcaption class="figure-caption text-center text-white fw-bold fs-3 mb-4">search any city</figcaption>
                        <img src="images/rain.png" class="figure-img img-fluid w-75 d-block mx-auto" alt="weather image">
                      </figure>                      
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="text text-center text-white fw-bold" style="font-size: 50px;" id="temperature">
                        0<span>°C</span>
                    </div>
                    <div class="text text-center text-white fw-light" id="description">
                        Overcast Clouds
                    </div>
                </div>
            </div>

            <div class="row mt-3 mb-2 fw-bold" style="font-size: smaller;">
                <div class="col">
                    <ul class="list-unstyled text-center"  style="display: grid; gap: 10px; grid-template-columns: repeat(3, 1fr);">
                        <li class="bg-light rounded p-3" style="display: grid;">
                            <span>Clouds</span>
                            <i class='bx bxs-cloud'></i>
                            <span id="clouds">98%</span>
                        </li>
                        <li class="bg-light rounded p-3" style="display: grid;">
                            <span>Humidity</span>
                            <i class='bx bxs-droplet'></i>
                            <span id="humidity">55%</span>
                        </li>
                        <li class="bg-light rounded p-3" style="display: grid;">
                            <span>Pressure</span>
                            <i class='bx bxs-tachometer'></i>
                            <span id="pressure">1001hPa</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row mt-3 mb-3">
                <div class="col mb-2">
                    <div class="scrollable-forecast p-2">
                        <div id="forecast" class="d-flex gap-2"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
      
    <div class="footer">
        <div class="container-fluid text-center p-3" style="background: rgb(5, 5, 41);">
            <span class="text-white">created using html, css, bootstrap and js</span>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="js/bootstrap.js"></script>
    <script src="script.js"></script>
</body>
</html>
