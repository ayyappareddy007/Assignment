import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read input from the user
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case-insensitivity

        // Check if the input is a pangram
        boolean isPangram = checkPangram(input);

        // Print the result
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    private static boolean checkPangram(String input) {
        Set<Character> uniqueChars = new HashSet<>();

        // Traverse each character in the input
        for (char ch : input.toCharArray()) {
            // Check if the character is an alphabet letter
            if (Character.isLetter(ch)) {
                uniqueChars.add(ch);
            }
        }

        // Check if the set of unique characters contains all the letters from 'a' to 'z'
        return uniqueChars.size() == 26;
    }
}
