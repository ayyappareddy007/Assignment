import java.util.HashMap;
import java.util.Scanner;

public class RomanToNumber {

    private static final HashMap<Character, Integer> romanMap = new HashMap<>();

    static {
        // Initialize the Roman numeral map
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        // Read Roman numeral input from the user
        System.out.print("Enter a Roman numeral: ");
        String romanNumeral = in.nextLine().toUpperCase();

        // Convert Roman numeral to integer
        int result = romanToInteger(romanNumeral);

        // Print the result
        System.out.println("Integer equivalent: " + result);
    }

    private static int romanToInteger(String romanNumeral) {
        int result = 0;
        int prevValue = 0;

        // Traverse the Roman numeral from right to left
        for (int i = romanNumeral.length() - 1; i >= 0; i--) {
            char currentChar = romanNumeral.charAt(i);
            int currentValue = romanMap.get(currentChar);

            // If the current value is less than the previous value, subtract it
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                // Otherwise, add it to the result
                result += currentValue;
            }

            // Update the previous value for the next iteration
            prevValue = currentValue;
        }

        return result;
    }
}
