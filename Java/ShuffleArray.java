
import java.util.Random;

public class ShuffleArray {

    private static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            // Generates a random index within the array
            int randIndex = random.nextInt(i + 1);

            // Swaps the elements at i and randIndex
            int temp = array[i];
            array[i] = array[randIndex];
            array[randIndex] = temp;
        }
    }
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(array);

        // Prints the shuffled array
        for (int i : array) {
            System.out.print(i + " ");
        }
    }
}
