package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by ovgeorgescu on 11/15/2016.
 */
@Controller
public class ViewController {

    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String sendMeHome() {
        return "home.html";
    }
}
