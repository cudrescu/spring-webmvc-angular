package controller;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.UserService;

import java.util.List;

/**
 * Created by ovgeorgescu on 11/15/2016.
 */
@Controller
@RequestMapping("/users")
public class RestUserController {

    @Autowired private UserService userService;

    @RequestMapping(value = "/")
    @ResponseBody
    public List<User> getAllUsersAsJson() {

        return userService.getUsers();
    }

    @RequestMapping(value = "/id/{id}")
    @ResponseBody
    public User findUserById(@PathVariable int id) {
        return userService.findById(id);
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.DELETE)
    @ResponseBody
    public boolean deleteUserById(@RequestParam("id") int id) {
        return userService.removeUser(id);
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
    @ResponseBody
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @RequestMapping(value = "/updateUser", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
    @ResponseBody
    public User updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }
}
