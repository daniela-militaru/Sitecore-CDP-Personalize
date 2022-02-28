(function () {
    for (var i = 0; i < guest.dataExtensions.length; i++) 
    {
        if (guest.dataExtensions[i].name === "GeoLocation" && guest.dataExtensions[i].values)
        {
            if (guest.dataExtensions[i].values.city) 
            {
                if (guest.dataExtensions[i].values.city === "[[ City | string ]]")
                {
                    return true;
                }
            }
        }
    }
    return false;
})();