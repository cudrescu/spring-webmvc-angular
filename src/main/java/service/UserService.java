package service;

import model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/**
 * Created by ovgeorgescu on 11/15/2016.
 */
@Service
public class UserService {

    public static List<User> users;
    static {
        users = new ArrayList<User>();
        users.add(new User(1,"Ovidiu Georgescu",21,"ovgeorgescu","somepassword"));
    }

    public User addUser(User user) {
        user.setId(generateId());
        users.add(user);
        return user;
    }

    public List<User> getUsers() {
        return users;
    }

    public User findById(int id) {
        for(User user : users) {
            if(user.getId() == id) {
                return user;
            }
        }
        return null;
    }

    public boolean removeUser(int id) {
        Iterator<User> iterator = users.iterator();
        User aux;
        while(iterator.hasNext()) {
            aux = iterator.next();
            if(aux.getId() == id) {
                iterator.remove();
                return true;
            }
        }
        return false;
    }

    public User updateUser(User user) {
        ListIterator<User> iterator = users.listIterator();
        User aux;
        while(iterator.hasNext()) {
            aux = iterator.next();
            if(aux.getId() == user.getId()) {
                iterator.set(user);
                return user;
            }
        }
        return null;
    }

    /* REMOVE WHEN HIBERNATE ADDED */
    private int generateId() {
        return users.size()+1;
    }

}
