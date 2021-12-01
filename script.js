
    if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    mapboxgl.accessToken = 'pk.eyJ1Ijoibml6YXl1bGlhIiwiYSI6ImNrajJ6czQwdjA4Z3Yyc2xsamMwZThncnAifQ.AbatdQTi9Lrc2AP3sPS4Vg';
    /**
     * Menambahkan maps
    */
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [110.7207398, -7.1698166],
    zoom: 6,
    scrollZoom: true
    });

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-right'
    );
    var tempat = {
        "type": "FeatureCollection",
        "features":
        [{
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.79501, -7.28254
            ]
            },
            "properties": {
            "website": "http://www.its.ac.id/",
            "nama": "Institut Teknologi Sepuluh Nopember",
            "city": "Surabaya",
            "alamat": "Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.78470, -7.26799
            ]
            },
            "properties": {
            "website": "http://www.unair.ac.id/",
            "nama": "Universitas Airlangga Kampus C",
            "city": "Surabaya",
            "alamat":"Jl. Dr. Ir. H. Soekarno, Mulyorejo, Kec. Mulyorejo, Kota SBY, Jawa Timur 60115"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                106.8248595, -6.3627638
            ]
            },
            "properties": {
            "website": "https://www.ui.ac.id/",
            "nama": "Universitas Indonesia",
            "city": "Depok",
            "alamat": "Jl. Margonda Raya, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                107.61038, -6.89052
            ]
            },
            "properties": {
            "website": "https://www.itb.ac.id/",
            "nama": "Institut Teknologi Bandung",
            "city": "Bandung",
            "alamat":"Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung, Jawa Barat 40132"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.3757397, -7.7712206
            ]
            },
            "properties": {
            "website": "https://ugm.ac.id/",
            "nama": "Universitas Gadjah Mada",
            "city": "Yogyakarta",
            "alamat": "Bulaksumur, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281"
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                106.72570, -6.56047
            ]
            },
            "properties": {
            "website": "http://www.ipb.ac.id/",
            "nama": "Institut Pertanian Bogor",
            "city": "Bogor",
            "alamat": "Kampus IPB, Jl. Raya Dramaga, Babakan, Kec. Dramaga, Kota Bogor, Jawa Barat 16680",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.44104, -7.05144
            ]
            },
            "properties": {
            "website": "http://www.undip.ac.id/",
            "nama": "Universitas Diponegoro",
            "city": "Semarang",
            "alamat": "Jl. Prof. Sudarto No.13, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275"
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.7863989, -7.3333388
            ]
            },
            "properties": {
            "website": "https://www.upnjatim.ac.id/",
            "nama": "UPN Veteran Jawa Timur",
            "city": "Surabaya",
            "alamat" : "Jl. Rungkut Madya No.1, Gn. Anyar, Kec. Gn. Anyar, Kota SBY, Jawa Timur 60294"
            
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.61370, -7.95244
            ]
            },
            "properties": {
            "website": "http://www.ub.ac.id/",
            "nama": "Universitas Brawijaya",
            "city": "Malang",
            "alamat":"Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145"
            }
        },
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.73428, -7.32239
            ]
            },
            "properties": {
            "website": "http://www.uinsby.ac.id/",
            "nama": "UIN Sunan Ampel",
            "city": "Surabaya",
            "alamat": "Jl. Ahmad Yani No.117, Jemur Wonosari, Kec. Wonocolo, Kota SBY, Jawa Timur 60237",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                113.71696, -8.16431
            ]
            },
            "properties": {
            "website": "http://unej.ac.id/",
            "nama": "Universitas Jember",
            "city": "Jember",
            "alamat": "Jl. Kalimantan Tegalboto No.37, Krajan Timur, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.85661, -7.56072
            ]
            },
            "properties": {
            "website": "http://uns.ac.id/",
            "nama": "Universitas Sebelas Maret",
            "city": "Surakarta",
            "alamat": "Jl. Ir. Sutami No.36, Kentingan, Kec. Jebres, Kota Surakarta, Jawa Tengah 57126",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                106.75545, -6.30702
            ]
            },
            "properties": {
            "website": "http://www.uinjkt.ac.id/",
            "nama": "UIN Syarif Hidayatullah",
            "city": "Tangerang",
            "alamat": "Jl. Ir H. Juanda No.95, Cemp. Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.61761,-7.96175
            ]
            },
            "properties": {
            "website": "http://www.um.ac.id/",
            "nama": "Universitas Negeri Malang",
            "city": "Malang",
            "alamat": "Jl. Semarang No.5, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                106.87838, -6.19453
            ]
            },
            "properties": {
            "website": "http://unej.ac.id/",
            "nama": "Universitas Negeri Jakarta",
            "city": "Jakarta",
            "alamat": "Jl. R.Mangun Muka Raya No.11, RT.11/RW.14, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.6697681, -7.3011729
            ]
            },
            "properties": {
            "website": "http://www.unesa.ac.id/",
            "nama": "Universitas Negeri Surabaya",
            "city": "Surabaya",
            "alamat": "Jl. Lidah Wetan, Lidah Wetan, Kec. Lakarsantri, Kota SBY, Jawa Timur 60213",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.35626, -7.85192
            ]
            },
            "properties": {
            "website": "http://isi.ac.id/",
            "nama": "Institut Seni Indonesia",
            "city": "Bantul",
            "alamat": "Jl. Parangtritis No.KM.6, RW.5, Glondong, Panggungharjo, Kec. Sewon, Bantul, Daerah Istimewa Yogyakarta 55188",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.6158293, -7.9454704
            ]
            },
            "properties": {
            "website": "http://www.polinema.ac.id/",
            "nama": "Politeknik Negeri Malang",
            "city": "Malang",
            "alamat": "Jl. Soekarno Hatta No.9, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                107.76396, -6.93416
            ]
            },
            "properties": {
            "website": "http://www.ipdn.ac.id/",
            "nama": "Institut Pemerintahan Dalam Negeri",
            "city": "Sumedang",
            "alamat": "Jalan Ir. Soekarno Desa No.KM 20, Cibeusi, Jatinangor, Kabupaten Sumedang, Jawa Barat 45363",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.21093, -7.49979
            ]
            },
            "properties": {
            "website": "http://www.akmil.ac.id/",
            "nama": "Akademi Militer",
            "city": "Magelang",
            "alamat": "Jalan Gatot Subroto Jurangombo Selatan Magelang Selatan, Seneng Satu, Banyurojo, Kec. Mertoyudan, Magelang, Jawa Tengah 56172",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.4180783, -7.0158121
            ]
            },
            "properties": {
            "website": "http://akpol.ac.id/home/",
            "nama": "Akademi Kepolisian",
            "city": "Semarang",
            "alamat": "Jl. Sultan Agung No.131, Candi Baru, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50232",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                113.72374, -8.15811
            ]
            },
            "properties": {
            "website": "https://www.polije.ac.id/sekilas-polije/",
            "nama": "Politeknik Negeri Jember",
            "city": "Jember",
            "alamat": "Jl. Mastrip, Krajan Timur, Sumbersari, Kec. Sumbersari, Kabupaten Jember, Jawa Timur 68121",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.79590, -7.27752
            ]
            },
            "properties": {
            "website": "http://www.unesa.ac.id/",
            "nama": "PPNS",
            "city": "Surabaya",
            "alamat": "ITS Sukolilo, Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.79451, -7.27618
            ]
            },
            "properties": {
            "website": "https://www.pens.ac.id/",
            "nama": "PENS",
            "city": "Surabaya",
            "alamat": "Institut Teknologi Sepuluh Nopember, Kampus, Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111",
            }
        },

        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                110.39458, -7.78387
            ]
            },
            "properties": {
            "website": "http://www.unesa.ac.id/",
            "nama": "UIN Sunan Kalijaga",
            "city": "Sleman",
            "alamat": "Jl. Laksda Adisucipto, Papringan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                112.72312, -7.12754
            ]
            },
            "properties": {
            "website": "https://trunojoyo.ac.id/",
            "nama": "Univeritas Trunojoyo Madura",
            "city": "Madura",
            "alamat": "Jl. Raya Telang, Perumahan Telang Inda, Telang, Kamal, Kabupaten Bangkalan, Jawa Timur 69162",
            }
        },
        
        {
            "type": "Feature",
            "geometry": {
            "type": "Point",
            "coordinates": [
                107.71763, -6.93124
            ]
            },
            "properties": {
            "website": "http://www.uinsgd.ac.id/",
            "nama": "UIN Sunan Gunung Djati",
            "city": "Bandung",
            "alamat": "Jl. A.H. Nasution No.105, Cipadung, Kec. Cibiru, Kota Bandung, Jawa Barat 40614"
            }
        }]
        }

    tempat.features.forEach(function(place, i){
    place.properties.id = i;
    });

    map.on('load', function (e) {
        map.addSource("places", {
            "type": "geojson",
            "data": tempat
        });

        var geocoder = new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        });
        buildLocationList(tempat);
        addMarkers();
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    });

    /**
     * Menambahkan marker pada setiap daftar tempat
    **/
    function addMarkers() {
    tempat.features.forEach(function(marker) {
        var el = document.createElement('div');
        el.id = "marker-" + marker.properties.id;
        el.className = 'marker';
        new mapboxgl.Marker(el, {offset: [0, -23]})
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        el.addEventListener('click', function(e){
            flyToPlace(marker);
            createPopUp(marker);
            var activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + marker.properties.id);
            listing.classList.add('active');
        });
    });
    }

    /**
     * Menambahkan daftar objek kampus pada sidebar
    **/
    function buildLocationList(data) {
    data.features.forEach(function(place, i){
        var prop = place.properties;
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.id = "listing-" + prop.id;
        listing.className = 'item';
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + prop.id;
        link.innerHTML = prop.nama;

        /* Menambahkan detail pada tiap data listing. */
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = prop.city;
        details.innerHTML += ' | ' + prop.website;

        link.addEventListener('click', function(e){
        for (var i=0; i < data.features.length; i++) {
            if (this.id === "link-" + data.features[i].properties.id) {
                var clickedListing = data.features[i];
                flyToPlace(clickedListing);
                createPopUp(clickedListing);
            }
        }
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
        });
    });
    }

    function flyToPlace(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15
        });
    }

    /**
     * Membuat pop-Up
    **/
    function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var popUp = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>' + currentFeature.properties.nama + '</h3>' + '<h4>' + currentFeature.properties.alamat + '</h4>')
        .addTo(map);
    }
